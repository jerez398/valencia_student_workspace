# File I/O Program Assignment

## Source Code

```java
package org.example;

import java.io.IOException;
import java.nio.file.*;
import java.util.stream.Stream;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        // "./" by using relative path this should create example wherever folder the program ran from
        Path path = Paths.get("./example.txt");

        // 1. Check if exist
        if (!Files.exists(path)) {

            // 2. Create
            try {
                Files.createFile(path);
            } catch (FileAlreadyExistsException e) {
                System.err.printf("File already exist: %s", path);
            } catch (IOException e) {
                System.err.printf("Unexpected error when creating file: %s", e);
            }
            String[] names = {"Javier Perez", "Stephany Perez", "Bombon Perez", "Burbuja Perez", "Lionel Messi"};

            try {
                Files.writeString(path, String.join("\n", names), StandardOpenOption.WRITE);
            } catch (IOException e) {
                System.err.printf("Unexpected error when writing to file: %s. error: %s", path, e);
            }
        }

        // 3. Print
        try (Stream<String> lines = Files.lines(path)) {
            lines.forEach(line -> {
                System.out.printf("- %s\n", line);
            });
        } catch (IOException e) {
            System.err.printf("Unexpected error when reading file: %s. error: %s", path, e);
        }
    }
}
```

## File Content (example.txt)

```text
Javier Perez
Stephany Perez
Bombon Perez
Burbuja Perez
Lionel Messi
```

## Console Output

```text
- Javier Perez
- Stephany Perez
- Bombon Perez
- Burbuja Perez
- Lionel Messi
```
