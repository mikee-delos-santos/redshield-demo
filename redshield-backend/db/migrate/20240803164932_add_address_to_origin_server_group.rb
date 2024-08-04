class AddAddressToOriginServerGroup < ActiveRecord::Migration[7.1]
  def change
    add_column :origin_server_groups, :address, :string
  end
end
