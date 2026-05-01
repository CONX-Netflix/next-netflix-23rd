import Featured from '@/components/main/Featured';
import Previews from '@/components/main/Previews';
import SplashScreen from '@/components/landing/SplashScreen';

export default function Home() {
  return (
    <SplashScreen>
      <div className="flex flex-col">
        <Featured />
        <Previews />
      </div>
    </SplashScreen>
  );
}
