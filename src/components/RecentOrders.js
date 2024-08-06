import React from 'react';

const RecentOrders = () => {
  const orders = [
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered', avatar: 'https://randomuser.me/api/portraits/men/10.jpg' },
    { customer: 'Jane Cooper', orderNo: '48965786', amount: '$305.02', status: 'Delivered', avatar: 'https://randomuser.me/api/portraits/women/10.jpg' },
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Cancelled', avatar: 'https://randomuser.me/api/portraits/men/10.jpg' },
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Pending', avatar: 'https://randomuser.me/api/portraits/men/10.jpg' },
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered', avatar: 'https://randomuser.me/api/portraits/men/10.jpg' },
    { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered', avatar: 'https://randomuser.me/api/portraits/men/10.jpg' }
    // Add more orders as needed
  ];

  return (
    <div className='col-span-12 md:col-span-7 lg:col-span-7 grid grid-cols-1'>
      <div className="bg-gray-800 p-4 rounded mb-4">
        <h2 className="text-xl mb-4 poppins-bold">Recent Orders</h2>
        <table className="w-full">
          <thead>
            <tr className="text-left poppins-regular">
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.orderNo} className="border-t border-gray-700">
                <td className="py-2 flex items-center">
                  <img src={order.avatar} alt={order.customer} className="w-8 h-8 rounded-full mr-2" />
                  {order.customer}
                </td>
                <td className="py-2 text-gray-500">{order.orderNo}</td>
                <td className="py-2 text-gray-500">{order.amount}</td>
                <td className="py-2"><span className={`rounded-full  py-1 px-3 ${order.status === "Delivered" ? 'bg-green-500':'bg-red-500'}`}>{order.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;

