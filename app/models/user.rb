class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }
  validates :password, confirmation: true
  validates :password, length: { minimum: 8 }
end
