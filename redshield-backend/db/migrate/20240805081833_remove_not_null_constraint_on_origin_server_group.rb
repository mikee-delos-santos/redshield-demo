class RemoveNotNullConstraintOnOriginServerGroup < ActiveRecord::Migration[7.1]
  def change
    remove_index :origin_server_groups, column:['dn_id'], name: "index_origin_server_groups_on_dn_id"
    remove_column :origin_server_groups, :dn_id
  end
end
