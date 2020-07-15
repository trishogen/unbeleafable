class Group < ApplicationRecord
  belongs_to :user
  has_many :comments

  validates :name, uniqueness: { case_sensitive: false }, presence: true
  validates :description, presence: true

end
