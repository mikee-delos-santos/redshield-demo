class AddContentRouteToTierOne < ActiveRecord::Migration[7.1]
  def change
    add_reference :tier_ones, :content_route, null: false, foreign_key: true
  end
end
