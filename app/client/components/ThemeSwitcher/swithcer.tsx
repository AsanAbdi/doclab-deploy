import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRKYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAWIDIOIDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIуIj48L3JlY3Q+PC9zdmc+Cg=="
        width={50}
        height={50}
        sizes="50x50"
        alt="Loading light or dark toggle"
        priority={false}
        title="Loading Light or Dark toggle"
      />
    );

  if (resolvedTheme === "dark") {
    return <FiSun onClick={() => setTheme("light")} />;
  } else if (resolvedTheme === "light") {
    return <FiMoon onClick={() => setTheme("dark")} />;
  } else {
    // По умолчанию, если resolvedTheme не равно ни 'dark', ни 'light'
    return null; // Или можно вернуть какой-то компонент-заглушку или сообщение об ошибке
  }
}
