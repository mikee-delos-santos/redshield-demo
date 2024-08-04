class Scaffold < ApplicationRecord
  belongs_to :client
  belongs_to :origin_server_group
end
