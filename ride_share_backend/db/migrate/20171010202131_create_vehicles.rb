class CreateVehicles < ActiveRecord::Migration[5.1]
  def change
    create_table :vehicles do |t|
      t.integer :seats
      t.integer :year
      t.string :make
      t.string :model
      t.boolean :passed_inspection

      t.timestamps
    end
  end
end
