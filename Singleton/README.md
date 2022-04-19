Singleton có 1 vấn để là multi threading, khi 2 getInstance chạy cùng 1 lúc thì nó sẽ tạo ra 2 instance khác nhau
cách fix: 
+ bên Node k bị vì node là single thread
+ những nền tảng khác dùng delay hàm getInstance khi instance null