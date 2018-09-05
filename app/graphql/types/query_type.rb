Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'

  # queries are just represented as fields
  field :allInvestors, !types[Types::InvestorType] do
    # resolve would be called in order to fetch data for that field
    resolve -> (obj, args, ctx) { Investor.all }
  end

  field :investor do
    type Types::InvestorType
    description "Fetch a single investor"
    argument :id, !types.ID
    resolve -> (obj, args, ctx) { Investor.find(args[:id]) }
  end
end
