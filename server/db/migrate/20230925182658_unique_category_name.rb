class UniqueCategoryName < ActiveRecord::Migration[7.0]
  def change
    change_table :categories do |t|
      t.index ['name'], name: 'uniq_category_name', unique: true
     end
  end
end