class CreateVirtualServers < ActiveRecord::Migration[7.1]
  def change
    create_table :virtual_servers do |t|
      t.references :client, null: false, foreign_key: true
      t.string :cluster
      t.integer :ports, array: true, default: []
      t.string :ip
      t.string :vs_name
      t.string :terminator_typ
      t.string :traffic_type

      t.timestamps
    end
  end
end
