import NavLinks from "./NavLinks";

const Navbar = ({ isMobile = false }) => {
  const user = {
    name: "John Travolta",
    email: "john@email.com",
    avatar: "https://avatar.iran.liara.run/public/50",
  };

  const UserProfile = ({ user }) => (
    <div className="border-t border-gray-200 p-4">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-gray-300">
          <img src={user.avatar} alt="Profile" aria-label="Profile picture" />
        </div>
        <div>
          <p className="text-sm font-medium">{user.name}</p>
          <p className="text-xs text-gray-500">{user.email}</p>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <nav className="fixed z-50 h-screen w-full bg-white lg:hidden">
        <div className="flex h-[calc(100vh-100px)] flex-col">
          <div className="flex-1 overflow-y-auto px-4 py-2">
            <div className="my-4">
              <input
                className="w-full rounded border border-gray-300 px-3 py-2"
                placeholder="Search..."
                aria-label="Search dashboard"
                type="search"
              />
            </div>
            <NavLinks isMobile />
          </div>
          <UserProfile user={user} />
        </div>
      </nav>
    );
  }

  return (
    <nav className="mx-auto hidden w-full px-4 py-2 lg:block lg:px-8">
      <NavLinks />
    </nav>
  );
};

export default Navbar;
