module.exports =  client => {
    client.createGuild = async guild => {

             client.addBalance = async (client, member, balance) => {
                const userToUpdate = await client.getUser(member);
                const updatedBalance = userToUpdate.balance + balance;
                await client.updateUser(member, { balance : updatedBalance});
            }
            client.remouveBalance = async (client, member, balance) => {
                const userToUpdate = await client.getUser(member);
                const updatedBalance = userToUpdate.balance - balance;
                await client.updateUser(member, { balance : updatedBalance});
            }
            
        }
    }