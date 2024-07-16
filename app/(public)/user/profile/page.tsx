import ProfileForm from '@/components/page/user/ProfileForm';

export default function Page() {
  return (
    <div>
      <h1 className="border-y border-gray-200 px-6 py-4 text-xl font-semibold md:border-t-0">
        個人資訊
      </h1>
      <ProfileForm />
    </div>
  );
}
