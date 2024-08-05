class AddColumnsToOriginServerGroup < ActiveRecord::Migration[7.1]
  def change
    add_column :origin_server_groups, :address, :string
    add_column :origin_server_groups, :port, :integer
  end
end
