class CreateOriginServerGroup < ActiveRecord::Migration[7.1]
  def change
    create_table :origin_server_groups do |t|
      t.references :client, null: false, foreign_key: true
      t.references :content_route, null: false, foreign_key: true
      t.string :name
      t.integer :port

      t.timestamps
    end
  end
end
