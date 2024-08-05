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
