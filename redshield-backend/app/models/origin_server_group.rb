class OriginServerGroup < ApplicationRecord
  belongs_to :client
  belongs_to :content_route
end
