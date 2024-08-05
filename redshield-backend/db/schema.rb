# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_08_05_075544) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "clients", force: :cascade do |t|
    t.string "name"
    t.string "country"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "content_routes", force: :cascade do |t|
    t.string "name"
    t.string "service_reference"
    t.string "host_names", default: [], array: true
    t.string "pops"
    t.string "spec"
    t.boolean "locked"
    t.bigint "client_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_content_routes_on_client_id"
  end

  create_table "dns", force: :cascade do |t|
    t.bigint "client_id", null: false
    t.bigint "origin_server_group_id", null: false
    t.string "name"
    t.string "type"
    t.string "ip_address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_dns_on_client_id"
    t.index ["origin_server_group_id"], name: "index_dns_on_origin_server_group_id"
  end

  create_table "origin_server_groups", force: :cascade do |t|
    t.bigint "client_id", null: false
    t.bigint "content_route_id", null: false
    t.string "osg_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "dn_id", null: false
    t.string "address"
    t.integer "port"
    t.index ["client_id"], name: "index_origin_server_groups_on_client_id"
    t.index ["content_route_id"], name: "index_origin_server_groups_on_content_route_id"
    t.index ["dn_id"], name: "index_origin_server_groups_on_dn_id"
  end

  create_table "tier_ones", force: :cascade do |t|
    t.string "name"
    t.string "cluster"
    t.string "ip"
    t.integer "port"
    t.string "terminator"
    t.string "traffic_type"
    t.bigint "client_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "content_route_id", null: false
    t.index ["client_id"], name: "index_tier_ones_on_client_id"
    t.index ["content_route_id"], name: "index_tier_ones_on_content_route_id"
  end

  create_table "virtual_servers", force: :cascade do |t|
    t.bigint "client_id", null: false
    t.string "cluster"
    t.integer "ports", default: [], array: true
    t.string "ip"
    t.string "vs_name"
    t.string "terminator_typ"
    t.string "traffic_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "content_route_id", null: false
    t.index ["client_id"], name: "index_virtual_servers_on_client_id"
    t.index ["content_route_id"], name: "index_virtual_servers_on_content_route_id"
  end

  add_foreign_key "dns", "clients"
  add_foreign_key "dns", "origin_server_groups"
  add_foreign_key "origin_server_groups", "clients"
  add_foreign_key "origin_server_groups", "content_routes"
  add_foreign_key "origin_server_groups", "dns"
  add_foreign_key "tier_ones", "clients"
  add_foreign_key "tier_ones", "content_routes"
  add_foreign_key "virtual_servers", "clients"
  add_foreign_key "virtual_servers", "content_routes"
end
