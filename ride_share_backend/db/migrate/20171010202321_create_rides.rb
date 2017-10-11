class CreateRides < ActiveRecord::Migration[5.1]
  def change
    create_table :rides do |t|
    	t.string :start_point
    	t.string :end_point
      t.integer :user_id
      t.integer :vehicle_id

      t.timestamps
    end
  end
end
