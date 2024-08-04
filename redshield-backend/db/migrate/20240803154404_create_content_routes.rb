class CreateContentRoutes < ActiveRecord::Migration[7.1]
  def change
    create_table :content_routes do |t|
      t.string :name
      t.string :service_reference
      t.string :host_names, array: true, default: []
      t.string :pops
      t.string :spec
      t.boolean :locked
      t.references :client

      t.timestamps
    end
  end
end
