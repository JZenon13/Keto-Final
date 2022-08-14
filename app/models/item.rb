class Item < ApplicationRecord
    belongs_to :meal

    validates :carbs, presence: true
end
