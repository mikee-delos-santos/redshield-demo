class CreateOriginServerGroups < ActiveRecord::Migration[7.1]
  def change
    create_table :origin_server_groups do |t|
      t.references :client, null: false, foreign_key: true
      t.references :content_route, null: false, foreign_key: true
      t.string :osg_name
      t.string :name
      t.string :type
      t.string :ip_address
      t.string :monitor_type

      t.timestamps
    end
  end
end
