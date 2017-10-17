import Link from 'next/link'

const RecentOrders = () => (
  <div id="recentOrders" className="content">
    <table className="table is-bordered is-striped is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Oct. 7th, 2017</td>
        </tr>
        <tr>
          <td>Oct. 8th, 2017</td>
        </tr>
        <tr>
          <td>Oct. 9th, 2017</td>
        </tr>
        <tr>
          <td>Oct. 10th, 2017</td>
        </tr>
      </tbody>
    </table>
    <style jsx>{`
      #recentOrders {
        padding: 30px;
      }
    `}</style>
  </div>
)

export default RecentOrders;
