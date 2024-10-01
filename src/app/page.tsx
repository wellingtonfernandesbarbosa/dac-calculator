"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

const Home = () => {
  const [tipoBolo, setTipoBolo] = useState<number>(1);
  const [quantidadeFatia, setQuantidadeFatia] = useState<number>(10);
  const [tipoRecheio, setTipoRecheio] = useState<number>(1);
  const [recheioPremium, setRecheioPremium] = useState<number>(0);
  const [acrescimo, setAcrescimo] = useState<number>(0);
  const [valorBolo, setValorBolo] = useState<number | null>(null);

  const calcularValorFatia = (): number => {
    let valorfatia = 0;
    if (tipoBolo === 1) {
      if (tipoRecheio === 1) {
        valorfatia = quantidadeFatia > 35 ? 4.28 : quantidadeFatia > 25 ? 4.4 : quantidadeFatia > 20 ? 4.5 : quantidadeFatia > 10 ? 4.53 : 5;
      } else {
        valorfatia = quantidadeFatia > 35 ? 4.62 : quantidadeFatia > 25 ? 5 : quantidadeFatia > 20 ? 5.1 : quantidadeFatia > 10 ? 5.2 : 6.6;
      }
    } else if (tipoBolo === 2) {
      if (tipoRecheio === 1) {
        valorfatia = quantidadeFatia > 35 ? 5.2 : quantidadeFatia > 25 ? 5.28 : quantidadeFatia > 20 ? 5.4 : quantidadeFatia > 10 ? 5.73 : 7;
      } else {
        valorfatia = quantidadeFatia > 35 ? 6 : quantidadeFatia > 25 ? 6.2 : quantidadeFatia > 20 ? 6.3 : quantidadeFatia > 10 ? 6.4 : 8.2;
      }
    }
    return valorfatia;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calcularTotal = () => {
    const valorfatia = calcularValorFatia();
    const valorRecheioPremium = (quantidadeFatia / 10) * recheioPremium;
    const valorAcrescimo = (quantidadeFatia / 10) * acrescimo;
    const valorFinal = valorfatia * quantidadeFatia + valorRecheioPremium + valorAcrescimo;
    setValorBolo(valorFinal);
  };

  useEffect(() => {
    calcularTotal();
  }, [tipoBolo, quantidadeFatia, tipoRecheio, recheioPremium, acrescimo, calcularTotal]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Calculadora de Bolo</h1>

      <div>
        <h2>Tipos de Bolo</h2>
        <select onChange={(e) => setTipoBolo(parseInt(e.target.value))}>
          <option value="1">Naked Cake</option>
          <option value="2">Bolo Decorado</option>
        </select>
      </div>

      <div>
        <h2>Quantidade de Fatias</h2>
        <input type="number" value={quantidadeFatia} onChange={(e) => setQuantidadeFatia(parseInt(e.target.value))} />
      </div>

      <div>
        <h2>Tipos de Recheio</h2>
        <select onChange={(e) => setTipoRecheio(parseInt(e.target.value))}>
          <option value="1">1 camada de mousse + 1 camada gourmet</option>
          <option value="2">2 camadas de recheio gourmet</option>
        </select>
      </div>

      <div>
        <h2>Recheio Premium</h2>
        <select onChange={(e) => setRecheioPremium(parseInt(e.target.value))}>
          <option value="0">Nenhum</option>
          <option value="5">Banana - R$5</option>
          <option value="7">Ganache - R$7</option>
          <option value="10">Creme Belga - R$10</option>
          <option value="10">Mousse de Ninho - R$10</option>
        </select>
      </div>

      <div>
        <h2>Acréscimos</h2>
        <select onChange={(e) => setAcrescimo(parseInt(e.target.value))}>
          <option value="0">Nenhum</option>
          <option value="7">Abacaxi - R$7</option>
          <option value="7">Morango - R$7</option>
          <option value="10">Geleia de Morango - R$10</option>
        </select>
      </div>

      {valorBolo !== null && <h2>Valor do bolo: R$ {valorBolo.toFixed(2).replace(".", ",")}</h2>}
    </div>
  );
};

export default Home;
