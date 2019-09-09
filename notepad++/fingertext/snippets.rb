raw = '';
Dir.glob('*/*.ftd').each { |file|
	puts file
	File.open(file, 'r').each { |line| raw << line }
}
File.open('snippets.ftd', 'w') { |file| file.write(raw) }