class AddContentRouteToVirtualServer < ActiveRecord::Migration[7.1]
  def change
    add_reference :virtual_servers, :content_route, null: false, foreign_key: true
  end
end
