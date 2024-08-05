class CreateDns < ActiveRecord::Migration[7.1]
  def change
    create_table :dns do |t|
      t.references :client, null: false, foreign_key: true
      t.references :origin_server_group, null: false, foreign_key: true
      t.string :name
      t.string :type
      t.string :ip_address

      t.timestamps
    end
  end
end
