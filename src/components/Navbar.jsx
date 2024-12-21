export default function Navbar() {
  return (
    <div className="flex gap-3 justify-between bg-orange-400 p-2">
      <div>LOGO</div>

      <div>
        <input type="search" value="Search Amazon.in" className="w-[600px] p-2" />
      </div>

      <div className="flex gap-4">
        <div>Account & Lists</div>
        <div>Orders</div>
        <div>Cart</div>
      </div>
    </div>
  );
}
