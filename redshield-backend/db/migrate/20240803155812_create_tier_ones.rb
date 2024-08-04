class CreateTierOnes < ActiveRecord::Migration[7.1]
  def change
    create_table :tier_ones do |t|
      t.string :name
      t.string :cluster
      t.string :ip
      t.integer :port
      t.string :terminator
      t.string :traffic_type
      t.references :client, null: false, foreign_key: true

      t.timestamps
    end
  end
end
