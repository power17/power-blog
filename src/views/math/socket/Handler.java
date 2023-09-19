package socket;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.Socket;
import java.nio.charset.StandardCharsets;

public class Handler extends Thread {
  Socket socket;

  Handler(Socket socket) {
    this.socket = socket;
  }

  @Override
  public void run() {
    try (InputStream input = this.socket.getInputStream()) {
      try (OutputStream output = this.socket.getOutputStream()) {
        this.handle(input, output);
      }
    } catch (Exception e) {
      try {
        this.socket.close();
      } catch (IOException ioe) {
        ioe.printStackTrace();
      }
      System.out.println("客户端连接断开");
    }
  }

  private void handle(InputStream input, OutputStream output) throws IOException {
    var writer = new BufferedWriter(new OutputStreamWriter(output, StandardCharsets.UTF_8));
    var reader = new BufferedReader(new InputStreamReader(input, StandardCharsets.UTF_8));
    // 发送
    writer.write("hello\n");
    writer.flush();
    for (;;) {
      // 接收
      String s = reader.readLine();
      if (s.equals("bye")) {
        writer.write("bye\n");
        writer.flush();
        break;
      }
      writer.write("服务端信息: " + s + "\n");
      System.out.println("接收到客户端信息:" + s);
      writer.flush();
    }
  }
}
