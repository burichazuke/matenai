class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name, null: false, index: true
      t.text :detail
      t.text :image
      t.text :marterial
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
