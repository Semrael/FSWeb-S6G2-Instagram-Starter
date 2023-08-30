import React from "react";
import Yorumlar from "../Yorumlar/Yorumlar";
import BegenBolumu from "./BegenBolumu";
import GonderiBasligi from "./GonderiBasligi";

const Gonderi = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { gonderiler, gonderiyiBegen } = props;

  return (
    <div className="post-border">
      <GonderiBasligi
        username={gonderiler.username}
        thumbnailUrl={gonderi.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={gonderiler.imageUrl}
        />
      </div>
      {/* BegenBolumu düzgün çalışması için ihtiyaç duyduğu tüm proplara sahip mi? */}
      <BegenBolumu
        gonderiyiBegen={() => gonderiyiBegen(gonderiler.id)}
        begeniSayisi={gonderiler.likes}
      />
      {/* Yorumlar da proplara dikkat istiyor! */}
      <Yorumlar yorumlar={gonderiler.commenst} />
    </div>
  );
};

export default Gonderi;
