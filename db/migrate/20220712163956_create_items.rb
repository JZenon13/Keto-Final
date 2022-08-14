class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.integer :meal_id
      t.integer :carbs
      t.string :name
      t.boolean :vegan
      t.string :category
      t.string :description
      t.string :img_url
      t.timestamps
    end
  end
end
