
<?php
$action = $_POST['action'];
$listContent = $_POST['listContent'];

$logFile = 'log.html';
$existingContent = file_get_contents($logFile);

if ($action === 'update') {
    // Check if there's any content between <ul> tags
        preg_match('/<ul id="list-container">(.*?)<\/ul>/s', $existingContent, $matches);
            $ulContent = isset($matches[1]) ? $matches[1] : '';

                if ($ulContent) {
                        // Update the <ul> content in the log file
                                $newUlContent = str_replace($ulContent, $listContent, $existingContent);
                                    } else {
                                            // If no content present between <ul> tags, append the new content
                                                    $newUlContent = str_replace('<ul id="list-container"></ul>', '<ul id="list-container">' . $listContent . '</ul>', $existingContent);
                                                        }

                                                            file_put_contents($logFile, $newUlContent);
                                                            }
                                                            ?>