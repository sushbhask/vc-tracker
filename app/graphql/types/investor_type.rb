Types::InvestorType = GraphQL::ObjectType.define do
  name 'Investor'

  field :id, !types.ID
  field :name, !types.String
  field :meeting_status, !types.String
end
