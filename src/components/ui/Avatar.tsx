
export default function ProfileAvatar (){
  return (
    <div className="relative size-[76px] flex items-center justify-center">
      <img src='/pic.png' alt="Profile" className="w-full rounded-full" />
      <button
        type="button"
        className="absolute cursor-pointer overflow-hidden bottom-1.5 -right-2 size-6 rounded-full flex items-center justify-center"
      >
        <img src='/camera.svg' alt="Update Avatar" className="w-full" />
        <span className="sr-only">Update Avatar</span>
      </button>
    </div>
  );
};

;