import ProfileAvatar from "../components/ui/Avatar";

const Profile = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col min-h-screen bg-gray-50 w-[320px] gap-6">
        <div className="bg-white px-4 pt-6 pb-5 shadow-sm">
          <h1 className="text-lg font-semibold">Account Settings</h1>
        </div>


        <div className="flex gap-4 items-center px-4">
          <ProfileAvatar />
          <div className="flex flex-col">
            <h2 className="font-medium text-[15px]">Marry Doe</h2>
            <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed px-4">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Profile;
