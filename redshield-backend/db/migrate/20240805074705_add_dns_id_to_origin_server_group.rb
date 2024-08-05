class AddDnsIdToOriginServerGroup < ActiveRecord::Migration[7.1]
  def change
    add_reference :origin_server_groups, :dn, null: false, foreign_key: true
    remove_column :origin_server_groups, :name
    remove_column :origin_server_groups, :type
    remove_column :origin_server_groups, :ip_address
    remove_column :origin_server_groups, :monitor_type
  end
end
