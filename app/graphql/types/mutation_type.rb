Types::MutationType = GraphQL::ObjectType.define do
  name "CreateInvestor"

  field :createInvestor, Types::InvestorType do
    argument :name, !types.String
    argument :meeting_status, !types.String

    resolve -> (obj, args, ctx) {
      Investor.create(
        name: args[:name],
        meeting_status: args[:meeting_status]
      )
    }
  end

  field :editInvestor, Types::InvestorType do
    argument :id, !types.ID
    argument :meeting_status, !types.String

    resolve -> (obj, args, ctx) {
      investor = Investor.find(args[:id])
      investor.meeting_status = args[:meeting_status]
      investor.save
      investor
    }
  end

  field :deleteInvestor, Types::InvestorType do
    argument :id, !types.ID

    resolve -> (obj, args, ctx) {
      investor = Investor.find(args[:id])
      investor.delete
    }
  end
end
