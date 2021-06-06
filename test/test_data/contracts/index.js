const faker = require('faker');
const moment = require('moment');

module.exports = {
    contracts: {
        fixedContract: {
            type: "Fixed Rate",
            name: faker.company.companyName(),
            scopeOfWork: faker.lorem.sentence(),
            contractStartDate: moment().subtract(1, 'days'),
            rate: "1000",
            currency: "GBP - British Pound",
            per: "Week",
            specialClause: faker.lorem.sentence(),
            contractorCountry: "United States",
            contractorState: "Colorado",
        }
    }
}