CREATE TABLE schema_migrations (
    version character varying PRIMARY KEY
);

CREATE UNIQUE INDEX schema_migrations_pkey ON schema_migrations(version text_ops);

CREATE TABLE clients (
    id BIGSERIAL PRIMARY KEY,
    name character varying,
    country character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);

CREATE UNIQUE INDEX clients_pkey ON clients(id int8_ops);

CREATE TABLE content_routes (
    id BIGSERIAL PRIMARY KEY,
    name character varying,
    service_reference character varying,
    host_names character varying[] DEFAULT '{}'::character varying[],
    pops character varying,
    spec character varying,
    locked boolean,
    client_id bigint,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);

CREATE UNIQUE INDEX content_routes_pkey ON content_routes(id int8_ops);
CREATE INDEX index_content_routes_on_client_id ON content_routes(client_id int8_ops);

CREATE TABLE origin_server_groups (
    id BIGSERIAL PRIMARY KEY,
    client_id bigint NOT NULL REFERENCES clients(id),
    content_route_id bigint NOT NULL REFERENCES content_routes(id),
    osg_name character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    address character varying,
    port integer
);

CREATE UNIQUE INDEX origin_server_groups_pkey ON origin_server_groups(id int8_ops);
CREATE INDEX index_origin_server_groups_on_client_id ON origin_server_groups(client_id int8_ops);
CREATE INDEX index_origin_server_groups_on_content_route_id ON origin_server_groups(content_route_id int8_ops);

CREATE TABLE tier_ones (
    id BIGSERIAL PRIMARY KEY,
    name character varying,
    cluster character varying,
    ip character varying,
    port integer,
    terminator character varying,
    traffic_type character varying,
    client_id bigint NOT NULL REFERENCES clients(id),
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    content_route_id bigint NOT NULL REFERENCES content_routes(id)
);


CREATE UNIQUE INDEX tier_ones_pkey ON tier_ones(id int8_ops);
CREATE INDEX index_tier_ones_on_client_id ON tier_ones(client_id int8_ops);
CREATE INDEX index_tier_ones_on_content_route_id ON tier_ones(content_route_id int8_ops);


CREATE TABLE virtual_servers (
    id BIGSERIAL PRIMARY KEY,
    client_id bigint NOT NULL REFERENCES clients(id),
    cluster character varying,
    ports integer[] DEFAULT '{}'::integer[],
    ip character varying,
    vs_name character varying,
    terminator_typ character varying,
    traffic_type character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    content_route_id bigint NOT NULL REFERENCES content_routes(id)
);

CREATE UNIQUE INDEX virtual_servers_pkey ON virtual_servers(id int8_ops);
CREATE INDEX index_virtual_servers_on_client_id ON virtual_servers(client_id int8_ops);
CREATE INDEX index_virtual_servers_on_content_route_id ON virtual_servers(content_route_id int8_ops);


CREATE TABLE dns (
    id BIGSERIAL PRIMARY KEY,
    client_id bigint NOT NULL REFERENCES clients(id),
    origin_server_group_id bigint NOT NULL REFERENCES origin_server_groups(id),
    name character varying,
    type character varying,
    ip_address character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);

CREATE UNIQUE INDEX dns_pkey ON dns(id int8_ops);
CREATE INDEX index_dns_on_client_id ON dns(client_id int8_ops);
CREATE INDEX index_dns_on_origin_server_group_id ON dns(origin_server_group_id int8_ops);

--- start seeding --
INSERT INTO schema_migrations (version) VALUES (20240803144640);
INSERT INTO schema_migrations (version) VALUES (20240803154404);
INSERT INTO schema_migrations (version) VALUES (20240803155038);
INSERT INTO schema_migrations (version) VALUES (20240803155812);
INSERT INTO schema_migrations (version) VALUES (20240803160011);
INSERT INTO schema_migrations (version) VALUES (20240803160838);
INSERT INTO schema_migrations (version) VALUES (20240803162334);
INSERT INTO schema_migrations (version) VALUES (20240805072542);
INSERT INTO schema_migrations (version) VALUES (20240805074705);
INSERT INTO schema_migrations (version) VALUES (20240805075544);
INSERT INTO schema_migrations (version) VALUES (20240805081833);

INSERT INTO clients (id, name, country, created_at, updated_at ) VALUES (1, 'Deal-A-Day', 'US', now(), now() );

INSERT INTO content_routes (id,name,service_reference,host_names,pops,spec,locked,client_id,created_at,updated_at) VALUES (1,'RS-2024-1010-CR21','RS-2024-1010','{mfa.redshield.co}','OHI1,ORE1','1.0',TRUE,1, now(), now());
INSERT INTO content_routes (id,name,service_reference,host_names,pops,spec,locked,client_id,created_at,updated_at) VALUES (2,'RS-2024-1010-CR27','RS-2024-1010','{redcore.dev.0-days.net}','OHI1,ORE1','1.0',FALSE,1, now(), now());

INSERT INTO tier_ones (id,name,cluster,ip,port,terminator,traffic_type,client_id,created_at,updated_at,content_route_id) VALUES (1,'RS-2024-1010-T1-4','LOREM IPSUM','LOREM IPSUM',1114,'LOREM IPSUM','LOREM IPSUM',1,now(),now(),1);
INSERT INTO origin_server_groups (id,client_id,content_route_id,osg_name,port,created_at,updated_at,address) VALUES (1,1,1,'RS-2024-1010-CR21_pool',80,now(), now(),'52.9.238.76');
INSERT INTO origin_server_groups (id,client_id,content_route_id,osg_name,port,created_at,updated_at,address) VALUES (1,1,1,'RS-2024-1010-CR21_pool',411,now(), now(),'52.9.238.76');

INSERT INTO virtual_servers (id,client_id,cluster,ports,ip,vs_name,terminator_typ,traffic_type,created_at,updated_at,content_route_id) VALUES (1,1,'OHI1','{11144}','10.176.21.40','RS-2024-1010-CR21_redir_vs','HTTPS Redirect','ALB',now(),now(),1);
INSERT INTO virtual_servers (id,client_id,cluster,ports,ip,vs_name,terminator_typ,traffic_type,created_at,updated_at,content_route_id) VALUES (2,1,'OHI1','{11145}','10.176.21.40','RS-2024-1010-CR21_vs','Standard (HTTPS)','ALB',now(),now(),1);
INSERT INTO virtual_servers (id,client_id,cluster,ports,ip,vs_name,terminator_typ,traffic_type,created_at,updated_at,content_route_id) VALUES (3,1,'OHI1','{11144}','10.112.29.40','RS-2024-1010-CR21_redir_vs','HTTPS Redirect','ALB',now(),now(),1);
INSERT INTO virtual_servers (id,client_id,cluster,ports,ip,vs_name,terminator_typ,traffic_type,created_at,updated_at,content_route_id) VALUES (4,1,'OHI1','{11145}','10.112.29.40','RS-2024-1010-CR21_vs','Standard (HTTPS)','ALB',now(),now(),1);

INSERT INTO dns (id,client_id,origin_server_group_id,name,type,ip_address,created_at,updated_at) VALUES (1,1,1,'mfa.redshield.co','A','52.223.44.65', now(), now());
