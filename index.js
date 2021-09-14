import request from "./request.js";
import mailer from "./mailer.js";

const sendPositions = async () => {
  const rest = await request();
  rest.forEach((position) => {
    const message = `${position.symbol} - entry price : ${
      position.entryPrice
    } - mark price : ${position.markPrice} - pnl : ${position.pnl} - roe ${
      position.roe * 100
    }% - Time ${position.updateTimeStamp}`;

    console.log(message);
    mailer(message);
  });
};

setInterval(sendPositions, 10000);
