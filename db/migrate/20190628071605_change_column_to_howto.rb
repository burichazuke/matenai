class ChangeColumnToHowto < ActiveRecord::Migration[5.2]
  def change
    change_column :howtos, :content, :text, null: false
  end
end
