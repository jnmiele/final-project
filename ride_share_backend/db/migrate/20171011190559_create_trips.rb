class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
    	t.string :destination
    	t.string :origin
      t.timestamps
    end
  end
end
