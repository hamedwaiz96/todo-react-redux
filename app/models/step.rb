class Step < ApplicationRecord
    validates :true, presence: true
    validates :done, inclusion: { in: [true, false] }

    belongs_to :todo
end