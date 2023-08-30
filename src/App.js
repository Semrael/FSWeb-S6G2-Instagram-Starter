/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React from "react";
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";
import Gonderi from "./bilesenler/Gonderiler/Gonderiler";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import "./App.css";
import sahteVeri from "./sahte-veri";
import { useState } from "react";

const App = () => {
  const [posts, setPost] = useState(sahteVeri);
  const [search, setSearch] = useState("");
  const [favs, setFavs] = useState([]);
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.
  const searchChangeHandler = (e) => {
    const { value } = e.target;
    setSearch(value);
    // todo Arama fonksiyonu yapılacak
    const searchResult = sahteVeri.filter((item) => {
      return item.username.includes(value);
    });
    setPost(searchResult);
  };

  const gonderiyiBegen = (gonderiID) => {
    const guncelPosts = posts.map((item) => {
      if (item.id == gonderiID) {
        if (!favs.includes(gonderiID)) {
          item.likes++;
          setFavs([...favs, gonderiID]);
        } else {
          item.likes--;
          favs.splice(favs.indexOf(gonderiID), 1);
          setFavs([...favs]);
        }
      }
      return item;
    });
    setPost(guncelPosts);
    /*
      Bu fonksiyon, belirli bir id ile gönderinin beğeni sayısını bir artırma amacına hizmet eder.

      Uygulamanın durumu, React ağacının en üstünde bulunur, ancak iç içe geçmiş bileşenlerin stateleri değiştirememesi adil olmaz!
      Bu fonksiyon, belirli bir gönderinin beğeni sayısını artırılmasına olanak sağlamak amacıyla iç içe geçmiş bileşenlere aktarılır.

	  "setGonderi" yi çağırsın ve state ine "posts.map" çağrısını iletin.
      `map` içine iletilen callback aşağıdaki mantığı gerçekleştirir:
        - gönderinin idsi "gonderiID" ile eşleşirse, istenen değerlerle yeni bir gönderi nesnesi döndürün.
        - aksi takdirde, sadece gönderi nesnesini değiştirmeden döndürün.
     */
  };

  return (
    <div className="App">
      {/* Yukarıdaki metni projeye başladığınızda silin*/}
      {/* AramaÇubuğu ve Gönderiler'i render etmesi için buraya ekleyin */}
      <AramaCubugu search={search} changeHandler={searchChangeHandler} />
      <Gonderi gonderiyiBegen={gonderiyiBegen} gonderiler={posts} />
      {/* Her bileşenin hangi proplara ihtiyaç duyduğunu kontrol edin, eğer ihtiyaç varsa ekleyin! */}
    </div>
  );
};

export default App;
