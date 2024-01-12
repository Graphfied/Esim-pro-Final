"use server"

interface getCheckUsageProps {
    orderId ?: string;
}
export const getCheckUsage = async (options : getCheckUsageProps = {}) => {

    try {
        const { orderId } = options;

        let url = `https://api.mobimatter.com/mobimatter/api/v2/provider/usage/${orderId}`

        const res = await fetch(url, {
            method: "GET",
            headers: {
              Accpet: "text/plain",
              "api-key": "104883b5fe984321a2ba68470504b267",
              MerchantId: "6d58aede-871a-4556-83f0-9b0e0c31602f",
            },
          });
          const data = await res.json();

          return data;
    } catch (error) {
        throw new Error(`Unable to fetch Order Usage data!`);
    }
}