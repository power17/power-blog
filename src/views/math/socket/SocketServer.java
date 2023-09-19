package socket;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class SocketServer {
  public static void main(String[] args) throws IOException {
    try (ServerSocket ss = new ServerSocket(6666)) {
      while (true) {
        Socket socket = ss.accept();
        System.out.println("客户端连接成功,客户端地址" + socket.getRemoteSocketAddress());
        // 创建进程
        Thread t = new Handler(socket);
        t.start();
      }
    }
  }

}
