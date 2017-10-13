class CreateUserTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :user_trips do |t|
    	t.integer :user_id
    	t.integer :trip_id
    	t.string :role
      t.timestamps
    end
  end
end
