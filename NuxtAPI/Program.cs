var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/api/message", () => "Hello from the API (.NET)!");

app.Run();